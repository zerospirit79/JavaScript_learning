let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },
    run() {
        let board = this.generateBoard();
        document.body.innerHTML = board;
        this.insertRowsNumbers();
        this.insertColsCharts();
    },
    /** метод генерирует игровое поле 8 на 8ю
     * @returns {string} html разметка в виде стороки
     * 
     */
    generateBoard() {
        let board = '';
        let rowStartWihtColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = '';
            if (rowStartWihtColor == 'white') {
                row = this.generateRow(rowStartWihtColor, this.config.rows[i]);
                rowStartWihtColor = 'black';
            } else {
                row = this.generateRow(rowStartWihtColor, this.config.rows[i]);
                rowStartWihtColor = 'white';
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
    /**
     * 
     * @param {string} startWihtColor 
     * @param {number} rowNum 
     */
    generateRow(startWihtColor, rowNum) {
        let currentColorClass = startWihtColor;
        let row = '';
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = '';
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;

    },

    insertRowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },


    insertColsCharts() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.config.cols.length; i++) {
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },
};

app.run();