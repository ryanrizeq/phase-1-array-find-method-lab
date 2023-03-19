function superbowlWin(record) {
    function findWin(element) {
        return (element.result === 'W');
    }
    if (record.find(findWin)) {
        return record.find(findWin).year;
    }
}