# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Basic controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

Pip.WebUI.Controls modules provides controls mix

### Color picker

**Control allows to select a color from predefined pallette**

**Using**

```html
<pip-color-picker [colors]="colors" [selected]="color" (changeColor)="colorChanged($event)"></pip-color-picker>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/color-picker.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/color-picker.png"/>
</a>

### Empty state
**Components show a placeholder for pages without data. It gives an explanation and provides one or few actions to get started**

**Using**

Template:

```html
<pip-empty-state>
    <pip-empty-state-title text="No tasks for today!" imageUrl="./assets/empty.svg"></pip-empty-state-title>
    <pip-empty-state-actions [actions]="emptyStateActions"></pip-empty-state-actions>
</pip-empty-state>
```

Initialized data:

```typescript
emptyStateActions: any[] = [
	{ title: 'Add task', action: () => { console.log('on add task clicked'); } },
	{ title: 'Import tasks', action: () => { console.log('on export tasks clicked'); } }
];
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/empty-state.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/empty-state.png"/>
</a>

### Check item

**Styled list item with checkboxes and multiple text headers**

**Using**

```html
<pip-check-item *ngFor="let shoe of typesOfShoes; let i = index" 
    [id]="i"
    [title]="shoe.title" 
    [subtitle]="shoe.subtitle"
    [subtitleIcon]="shoe.subtitleIcon" 
    [textBold] = "shoe.textBold"
    [text] = "shoe.text"
    (select) = "select($event)"
    [checked] = "shoe.checked"
    (check) = "check($event)">
</pip-check-item>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/check-item.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/check-item.png"/>
</a>


### Jumbotron

**Styled information container. Usually used to show statistics and other historical information**

**Using**

```html
<pip-jumbotron>
    <pip-jumbotron-picture src="assets/empty.svg" width="220px" height="240px"></pip-jumbotron-picture>
    <pip-jumbotron-content title="Failed workflows" icon="chevron_right">
        <pip-jumbotron-item *ngFor="let item of items" [item]="item"></pip-jumbotron-item>
    </pip-jumbotron-content>
    <pip-jumbotron-content title="Failed workflows" icon="chevron_right">
        <pip-jumbotron-item *ngFor="let item of items" [item]="item"></pip-jumbotron-item>
    </pip-jumbotron-content>
</pip-jumbotron>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/jumbotron.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/jumbotron.png"/>
</a>

### Slider

**Component toggles animated slides that contain any template: text, images, etc.**

**Using**

```html
<pip-slider #slider>
    <pip-slide *ngFor="let slide of slides; let i = index" fxLayout="column" fxLayoutAlign="center center">
        <img height="100%" [src]="slide">
    </pip-slide>
    <pip-slider-button direction="backward" [disabled]="slider.isFirst"></pip-slider-button>
    <pip-slider-button [disabled]="slider.isLast"></pip-slider-button>
</pip-slider>
```

**Example on the image**

<a href="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/slider.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-controls/raw/master/doc/images/slider.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-controls --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
