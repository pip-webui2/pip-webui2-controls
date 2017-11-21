import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Part } from './part.model';

@Injectable()
export class PipPartService {
    private _parts: Part[];

    public constructor() {
        this.resetParts();
    }

    public resetParts() {
        this._parts = [];
    }

    public get parts(): Part[] {
        return this._parts;
    }

    public set parts(newParts: Part[]) {
        this._parts = newParts;
    }

    public addNewPartByName(name: string, visible: boolean, props: any = null): Part {
        let newPart: Part = new Part();
        newPart.name = name;
        newPart.visible = new BehaviorSubject<boolean>(visible);
        newPart.properties = new BehaviorSubject<any>(props);
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    public addNewPart(newPart: Part): Part {
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    public updatePart(newPart: Part): Part {
        let index: number = _.findIndex(this._parts, { name: newPart.name });

        if (index != -1) {
            this._parts[index].name = newPart.name;
            this._parts[index].visible.next(newPart.visible.value);
            this._parts[index].properties.next(newPart.properties.value);

            return this._parts[index];
        } else {
            return this.addNewPart(newPart);
        }
    }

    public updatePartByName(name: string, visible: boolean, props: any = null): Part {
        let index: number = _.findIndex(this._parts, (part: Part) => {
            return part.name == name;
        });
        if (index > -1) {
            this._parts[index].name = name;
            if (visible != null) this._parts[index].visible.next(visible);
            if (props != null) this._parts[index].properties.next(props);

            return this._parts[index];
        } else {
            return this.addNewPartByName(name, visible, props);
        }
    }

    /*public updateProps(name: string, props: any): Part {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            this._parts[index].properties.next(props);
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }

    public updateProp(name: string, propName: string, propValue: any): Part {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            let props: any = this._parts[index].properties.value;

            props ? props[propName] = propValue : props = { propName: propValue };
            this._parts[index].properties.next(props);
           
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }*/

    public changeVisibility(name: string, visible: boolean): Part {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            this._parts[index].visible.next(visible);
            return this._parts[index];
        } else {
            console.log('Part not found');
            return null;
        }
    }

    public getPart(name: string): Part {
        let index: number = _.findIndex(this._parts, { name: name });

        return index > -1 ? this._parts[index] : null;
    }

}