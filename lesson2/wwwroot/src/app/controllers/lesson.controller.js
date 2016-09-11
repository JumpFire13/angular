(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('lesson.controller',
            ['$rootScope', '$scope',
                function($rootScope, $scope) {
                    var d3 = require('d3');
                    /**
                     * Создает шахматную доску
                     *
                     * @author Anton Semenov <jumpfire@gmail.com>
                     * @ param {number} sizeCell - размер ячейки
                     */

                    var chessBoard = function (sizeCell) {
// Задаем ширину и высоту ячейки шашматной доски (у стандартной доски ячейка квадратная), если значение не передано, устанавливаем значение равное 50 px
                        sizeCell = sizeCell || 50;
                        var svg = d3.select('#lesson1')
                            .append('svg')
                            .attr({
                                width: sizeCell > 45 ? sizeCell * 10 : sizeCell * 10 + 50,
                                height: sizeCell > 45 ? sizeCell * 10 : sizeCell * 10 + 50
                            });
                        function showNumber(x, y) {
                            return svg
                                .append('text')
                                .attr({
                                    x: x,
                                    y: (sizeCell/2 + 50) + y*sizeCell
                                })
                                .text(8-y);
                        }
                        function showLetter(x, y) {
                            var arrLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                            return svg
                                .append('text')
                                .attr({
                                    x: (sizeCell/2 + 50) + x*sizeCell,
                                    y: y
                                })
                                .text(arrLetter[x]);
                        }
                        for (var i = 0; i < 8; i++) {
                            showNumber(25, i);
                            showNumber(sizeCell*8 + 75, i);
                            showLetter(i, 25);
                            showLetter(i, sizeCell*8 + 75);
                            for (var j = 0; j < 8; j++) {
                                svg
                                    .append('rect')
                                    .attr({
                                        x: 50 + j * sizeCell,
                                        y: 50 + i * sizeCell,
                                        fill: (i+j) % 2 ? 'black' : 'white',
                                        'stroke-width': 3,
                                        stroke: 'black',
                                        width: sizeCell,
                                        height: sizeCell
                                    });
                            }
                        }
                    };
                    chessBoard();
                }
            ]);
})(angular);
