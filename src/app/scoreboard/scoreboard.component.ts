import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /* update_score() {
    $.each(['red', 'green', 'blue', 'yellow'], function (k, v) {
      $('.player.' + v + ' .score').text($('#board td.' + v).length);
    });
    var s = $('#info table tr').sort(function (a, b) {
      var tda = parseInt($(a).find('td:eq(1)').text());
      var tdb = parseInt($(b).find('td:eq(1)').text());
      return tda < tdb ? 1 : tda > tdb ? -1 : 0;
    });
    $('#info table tr').remove();
    $.each(s, function (k, v) {
      $('#info table').append(v);
    });
  } */
}
