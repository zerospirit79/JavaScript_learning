class Game {

    /**
     * @param {Status} status 
     * @param {Board} board 
     */
    init(status, board) {
        this.status = status;
        this.board = board;
    }

    /**
     * Обработчик события клика.
     * @param {MouseEvent} event
     */
    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }
        this.board.fillCell(event);
        if (this.hasWon()) {
            // Ставим статус в "остановлено".
            this.status.setStatusStopped();
            // Сообщаем о победе пользователя.
            this.sayWonPhrase();
        }

        // Меняем фигуру (крестик или нолик).
        this.status.togglePhase();
    }

    /**
     * Проверка был ли корректный клик, что описан в событии event.
     * @param {Event} event
     * @returns {boolean} Вернет true в случае если статус игры "играем", клик что описан в объекте event был
     * по ячейке и ячейка куда был произведен клик был по пустой ячейке.
     */
    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    /**
     * Проверка есть ли выигрышная ситуация на карте.
     * @returns {boolean} Вернет true, если игра выиграна, иначе false.
     */
    hasWon() {
        return this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 2,
                y: 0
            }) ||
            this.isLineWon({
                x: 0,
                y: 1
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 1
            }) ||
            this.isLineWon({
                x: 0,
                y: 2
            }, {
                x: 1,
                y: 2
            }, {
                x: 2,
                y: 2
            }) ||

            this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 1
            }, {
                x: 0,
                y: 2
            }) ||
            this.isLineWon({
                x: 1,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 1,
                y: 2
            }) ||
            this.isLineWon({
                x: 2,
                y: 0
            }, {
                x: 2,
                y: 1
            }, {
                x: 2,
                y: 2
            }) ||

            this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
