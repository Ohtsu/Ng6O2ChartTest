import * as d3 from 'd3';



export class O2Common {

    constructor(
        public svgContainer: any,
        public configData: any,
        public autoMaxX: number,
        public autoMaxY: number,
        public svgWidth: number,
        public svgHeight: number
    ) { }

// -------------------------------------------
// ----  CLASS NAME  -------------------------
// -------------------------------------------
public get axisClassName(): string {
    return this.configData.className.axis;
}

public get lineClassName(): string {
    return this.configData.className.line;
}

public get axisXBorderLineClassName(): string {
    return this.configData.className.axisXBorder;
}



// -------------------------------------------
// ----  MAX VALUE  --------------------------
// -------------------------------------------
public get maxXValue(): number {
    let _maxX = this.autoMaxX;
    if (!this.configData.maxValue.auto) {
        _maxX = this.configData.maxValue.x;
    }
    return _maxX;
}

public get maxYValue(): number {
    let _maxY = this.autoMaxY;
    if (!this.configData.maxValue.auto) {
        _maxY = this.configData.maxValue.y;
    }
    return _maxY;
}

// -------------------------------------------
// ----  GRAPH -------------------------------
// -------------------------------------------
public get graphInitXPos(): number {
    let _intX = this.configData.margin.left;
    if (this.configData.legend.display && this.configData.legend.position !== 'right') {
        _intX = this.configData.margin.left
                    + this.configData.legend.totalWidth;
    }
    return _intX;
}

public get graphInitYPos(): number {
    const _intY = this.configData.margin.top
                + this.configData.title.height;
    return _intY;
}

public get graphYScale(): number {
    return this.graphHeight / this.maxYValue;
}

public get graphXScale(): number {
    return this.graphWidth / this.maxXValue;
}

public get graphWidth(): number {
    let _margin = this.configData.margin.left
                 + this.configData.margin.right;
    if (this.configData.legend.display) {
        _margin += this.configData.legend.totalWidth;
    }

    return this.svgWidth - _margin;
}

public get graphHeight(): number {
    const _h = this.svgHeight
                - this.configData.title.height
                - this.configData.margin.top
                - this.configData.margin.bottom;
    return _h;
}

public get graphCenterPos(): any {
    const _xyArray: Array<number> = new Array();
    const _x = this.configData.margin.left
                + this.graphWidth / 2;
    const _y = this.configData.margin.top
            + this.configData.title.height
            + this.graphHeight / 2;
    _xyArray.push(_x);
    _xyArray.push(_y);
    return _xyArray;
}

public get graphCenterTranslatePos(): string {
    const _x = this.configData.margin.left
            + this.graphWidth / 2;
    const _y = this.configData.margin.top
            + this.configData.title.height
            + this.graphHeight / 2;
    return 'translate(' + String(_x) + ', ' + String(_y) + ')';
}

public get graphInitTranslatePos(): string {
    const _x = this.graphInitXPos;
    const _y = this.graphInitYPos;
    return 'translate(' + String(_x) + ', ' + String(_y) + ')';
}

// -------------------------------------------
// ----  AXIS  -------------------------------
// -------------------------------------------
public get axisXLabelInitXPos(): number {
    const _x = this.configData.margin.left
            + this.configData.axis.xLabel.leftMargin;
    return _x;
}

public get axisXLabelInitYPos(): number {
    const _y = this.svgHeight
            - this.configData.axis.xLabel.bottomMargin;
    return _y;
}

public get axisTranslatePos(): string {
    const _x = this.configData.margin.left;
    const _y = this.configData.margin.top
            + this.configData.title.height;
    return 'translate(' + String(_x) + ', ' + String(_y) + ')';
}


public get axisXBorderLineWidth(): number {
    return this.configData.axis.borderLineWidth;
}

public get axisYBorderHeight(): number {
    const _margin = this.configData.margin.top
                    + this.configData.margin.bottom
                    + this.configData.title.height;
    return this.svgHeight - _margin;
}

public get axisXBorderWidth(): number {
    let _margin = this.configData.margin.left
                 + this.configData.margin.right;
    if (this.configData.legend.display) {
        _margin += this.configData.legend.totalWidth;
    }
    return this.svgWidth - _margin;
}

public get axisYOrient(): string {
    return 'left';
}

public get axisXOrient(): string {
    return 'bottom';
}
public get axisXBorderTranslatePos(): string {
    const sYpos = String(this.svgHeight - this.configData.margin.bottom);
    return 'translate(' + this.configData.margin.left + ', ' + sYpos + ')';
}



// -------------------------------------------
// ----  RADIUS  -------------------------------
// -------------------------------------------
public get innerRadiusPercent(): number {
    return this.configData.pie.innerRadius.percent;
}

public get innerRadiusTitle(): string {
    return this.configData.pie.innerRadius.title;
}

public get innerRadiusTitleTranslatePos(): string {
    const _x = this.configData.margin.left
                + this.graphWidth / 2;
    const _y = this.configData.margin.top
            + this.configData.title.height
            + this.graphHeight / 2
            + 5;
    return 'translate(' + String(_x) + ', ' + String(_y) + ')';
}

// -------------------------------------------
// ----  LEGEND  -------------------------------
// -------------------------------------------
public get legendInitXPos(): number {
    let _x = this.configData.margin.left
                + this.graphWidth
                + this.configData.legend.initXPos ;
    if (this.configData.legend.position !== 'right') {
        _x = this.configData.margin.left
             + this.configData.legend.initXPos ;
    }
    return _x;
}

public get legendInitYPos(): number {
    const _y = this.configData.margin.top
            + this.configData.title.height
            + this.configData.legend.initYPos;
    return _y;
}

// -------------------------------------------
// ----  GRID  -------------------------------
// -------------------------------------------
public get gridYStep(): number {
    const _maxY = Math.ceil(this.maxYValue / 100) * 10;
    const _lineNum = 10;
    const _step = Math.ceil(_maxY / _lineNum) * _lineNum;
    return _step;
}

public get gridXStep(): number {
    const _maxX = Math.ceil(this.maxXValue / 100) * 10;
    const _lineNum = 10;
    const _step = Math.ceil(_maxX / _lineNum) * _lineNum;
    return _step;
}


// -------------------------------------------
// ----  TITLE  -------------------------------
// -------------------------------------------
public get titleInitXPos(): number {
    const _x = this.configData.margin.left
            + (this.graphWidth + this.configData.legend.totalWidth) / 2
            + this.configData.title.leftMargin;
    return _x;
}

public get titleInitYPos(): number {
    const _y = this.configData.margin.top
            + this.configData.title.height
            - this.configData.title.bottomMargin;
    return _y;
}

// -------------------------------------------
// ----  COLOR  -------------------------------
// -------------------------------------------
public get defaultColorFunc(): any {
    let _color: any;
    if (this.configData.color.auto ) {
        if (this.configData.color.defaultColorNumber === '20') {
            _color = d3.scaleOrdinal(d3.schemeCategory20);
        } else {
            _color = d3.scaleOrdinal(d3.schemeCategory10);
        }
    }
    return _color;
}
}

export class O2LineData {
constructor(
    public data: Array<number>,
    public color: string,
    public dashedArray: string,
    public interpolate: string
    ) { }
}


export class O2LegendData {
constructor(
   public title: string,
    public color: string ) { }

}

export class O2ScatterPlotData {
constructor(
   public x: number,
   public y: number,
   public r: number ) { }

}

export class O2StackBarData {
constructor(
   public x: string,
   public y: number
   ) { }

}

export class O2IdValueData {
constructor(
   public id: number,
    public value: number
   ) { }

}

// export class O2KeyValueData {
//     constructor(
//        public key: string,
// 	   public value: number
//        ) { }
// }
// export class O2DateKVArrayData {
//     constructor(
//        public date: Date,
// 	   public kvArray: Array<O2KeyValueData>
//        ) { }
// }
// export class O2DateStKVArrayData {
//     constructor(
//        public dateSt: string,
// 	   public kvArray: Array<O2KeyValueData>
//        ) { }
// }