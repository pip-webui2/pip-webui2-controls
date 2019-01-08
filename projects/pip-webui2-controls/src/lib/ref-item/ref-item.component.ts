import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pip-ref-item',
    templateUrl: './ref-item.component.html',
    styleUrls: ['./ref-item.component.scss']
})
export class PipRefItemComponent {

    public iconBackground: string;
    public iconForeground: string;

    @Input() id: string;
    @Input() img: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() set defaultIconBackground(bg: string) {
        this.iconBackground = bg;
        this.iconForeground = this.invertColor(bg, true);
    }
    @Input() alwaysUppercase = false;
    @Input() isOverflow = false;

    @Output() select = new EventEmitter();

    public constructor() {
        this.defaultIconBackground = '#880e4f';
    }

    private invertColor(hex, bw) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        let r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
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
