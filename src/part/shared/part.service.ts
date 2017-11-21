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

    public addNewPartByName(name: string, visible: boolean, props: any = null): Part {
        let newPart: Part = new Part();
        newPart.name = name;
        newPart.visible = new BehaviorSubject<boolean>(visible);
        newPart.properties = new BehaviorSubject<any>(props);
        this._parts ? this._parts.push(newPart) : this._parts = [newPart];

        return this._parts[this._parts.length - 1];
    }

    public changeVisibility(name: string, visible: boolean): Part {
        let index: number = _.findIndex(this._parts, { name: name });
        if (index > -1) {
            if (visible != null) this._parts[index].visible.next(visible);
            return this._parts[index];
        } else {
            return this.addNewPartByName(name, visible);
        }
    }

}