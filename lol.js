function button_active() {
    var start_score = form1.txt1.value;
    var finish_score = form1.txt2.value;
    var mmr_score = form1.txt3.value;
    if (isNaN(mmr_score)) {
        alert('오르는 점수는 숫자로 입력해주세요.');
        return;
    }
    if (Number(mmr_score) <= 0) {
        alert('0보다 큰 수를 입력해 주세요');
        return;
    }
    var start = 0;
    var finish = 0;
    //start_score[0] 배열로 들어가 있음

    if (start_score[0] == 'a') {
        start =
            start +
            (4 - Number(start_score[1])) * 100 +
            Number(start_score[3]) * 10 +
            Number(start_score[4]);
    } else if (start_score[0] == 'b') {
        start =
            400 +
            (4 - Number(start_score[1])) * 100 +
            Number(start_score[3]) * 10 +
            Number(start_score[4]);
    } else if (start_score[0] == 's') {
        start =
            800 +
            (4 - Number(start_score[1])) * 100 +
            Number(start_score[3]) * 10 +
            Number(start_score[4]);
    } else if (start_score[0] == 'g') {
        start =
            1200 +
            (4 - Number(start_score[1])) * 100 +
            Number(start_score[3]) * 10 +
            Number(start_score[4]);
    } else if (start_score[0] == 'p') {
        start =
            1600 +
            (4 - Number(start_score[1])) * 100 +
            Number(start_score[3]) * 10 +
            Number(start_score[4]);
    } else {
        start =
            2000 +
            (4 - Number(start_score[1])) * 100 +
            Number(start_score[3]) * 10 +
            Number(start_score[4]);
    }

    if (finish_score[0] == 'a') {
        finish =
            finish +
            (4 - Number(finish_score[1])) * 100 +
            Number(finish_score[3]) * 10 +
            Number(finish_score[4]);
    } else if (finish_score[0] == 'b') {
        finish =
            400 +
            (4 - Number(finish_score[1])) * 100 +
            Number(finish_score[3]) * 10 +
            Number(finish_score[4]);
    } else if (finish_score[0] == 's') {
        finish =
            800 +
            (4 - Number(finish_score[1])) * 100 +
            Number(finish_score[3]) * 10 +
            Number(finish_score[4]);
    } else if (finish_score[0] == 'g') {
        finish =
            1200 +
            (4 - Number(finish_score[1])) * 100 +
            Number(finish_score[3]) * 10 +
            Number(finish_score[4]);
    } else if (finish_score[0] == 'p') {
        finish =
            1600 +
            (4 - Number(finish_score[1])) * 100 +
            Number(finish_score[3]) * 10 +
            Number(finish_score[4]);
    } else if (finish_score[0] == 'd') {
        finish =
            2000 +
            (4 - Number(finish_score[1])) * 100 +
            Number(finish_score[3]) * 10 +
            Number(finish_score[4]);
    } else {
        finish = 2400;
    }

    var count = 0;
    var price = 0;
    //아이언4~1 A4~1 5000
    //브론즈4~1 B4~1 5000
    //실 4-1 5000
    //골 4-1 6000
    //플 4-2 9000
    //플1 9500
    //다 4 12500 다3 17000 다2 23000 다1 32000

    start = Number(start);
    var initial_start = start;
    finish = Number(finish);

    while (start < finish) {
        if (isNaN(mmr_score)) {
            mmr_score = 1000;
        }
        start = start + Number(mmr_score);
        if (start < 1200) {
            price += 5000;
        } else if (start < 1600) {
            price += 6000;
        } else if (start < 1900) {
            price += 9000;
        } else if (start < 2000) {
            price += 9500;
        } else if (start < 2100) {
            price += 12500;
        } else if (start < 2200) {
            price += 17000;
        } else if (start < 2300) {
            price += 23000;
        } else {
            price += 32000;
        }
        count = count + 1;
    }
    if (start_score[0] != finish_score[0]) {
        alert(initial_start, finish);
        while (initial_start < finish) {
            initial_start += 1;
            if (initial_start == 400) {
                price += 15000;
            } else if (initial_start == 800) {
                price += 15000;
            } else if (initial_start == 1200) {
                price += 15000;
            } else if (initial_start == 1600) {
                price += 18000;
            } else if (initial_start == 2000) {
                price += 9500 * 3;
            } else if (initial_start == 2400) {
                price += 32000 * 3;
            }
        }
    }

    result = start_score + finish_score + mmr_score;
    document.getElementById('msg').innerHTML =
        '계산된 가격 : ' + price + '<br>이겨야 하는 판 수 : ' + count;
}
