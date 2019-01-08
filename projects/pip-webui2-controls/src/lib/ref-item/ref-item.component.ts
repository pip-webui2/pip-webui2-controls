import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pip-ref-item',
    templateUrl: './ref-item.component.html',
    styleUrls: ['./ref-item.component.scss']
})
export class PipRefItemComponent {

    private hexRegex = /[#]?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/;
    private rgbaRegex = /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/;
    private _defaultIconBackground = '#880e4f';
    private _defaultIconForeground = '#FFFFFF';

    public iconBackground: string;
    public iconForeground: string;

    @Input() id: string;
    @Input() img: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() set defaultIconBackground(bg: string) {
        if (bg.match(this.hexRegex)) {
            this.iconBackground = bg;
            const [r, g, b] = this.hexToRgb(bg);
            this.iconForeground = this.invertColor(r, g, b, true);
        } else if (bg.match(this.rgbaRegex)) {
            const match = bg.match(this.rgbaRegex);
            const [r, g, b] = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
            this.iconBackground = bg;
            this.iconForeground = this.invertColor(r, g, b, true);
        } else {
            this.iconBackground = this._defaultIconBackground;
            this.iconForeground = this._defaultIconForeground;
        }
    }
    @Input() letterSource: string;
    @Input() isOverflow = false;

    @Output() select = new EventEmitter();

    public constructor() {
        this.defaultIconBackground = '#880e4f';
    }

    private hexToRgb(hex: string) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        hex = hex.length !== 6 ? this._defaultIconBackground : hex;
        const r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        return [r, g, b];
    }

    private invertColor(r: number, g: number, b: number, bw: boolean): string {
        if (bw) {
            return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                ? '#000000'
                : '#FFFFFF';
        }
        // invert color components
        r = (255 - r);
        g = (255 - g);
        b = (255 - b);
        // pad each with zeros and return
        return '#' + r.toString().padStart(2, '0') + g.toString().padStart(2, '0') + b.toString().padStart(2, '0');
    }

    public onSelect() {
        this.select.emit(this.id);
    }
}
