class Matrix{
    constructor(mtrx){
        this.mtrx = mtrx;
        this.row = this.getRows();
        this.column = this.getColumns();
    }

    getRows(){
        let str = this.mtrx;
        let pos = 0;
        let foundPos = 0;
        let rowsArr = [];
        while (foundPos >= 0){
            foundPos = str.indexOf('\n', pos);
            console.log(foundPos);
            foundPos < 0 ? rowsArr.push(str.slice(pos, str.length).split(' ').map((item) => {return parseInt(item)})) : rowsArr.push(str.slice(pos, foundPos).split(' ').map((item) => {return parseInt(item)}));
            pos = foundPos + 1;
        }
        return rowsArr;
    }

    getColumns(){
        let columnsArr = [];
        let tmpArr = [];
        for (let j = 0; j < this.row.length; j++){
            for (let i = 0; i < this.row[j].length; i++){
                tmpArr.push(this.row[i][j]);
            }
            columnsArr.push(tmpArr);
            tmpArr = [];
        }
        return columnsArr;
    }
}
