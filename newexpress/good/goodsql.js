var good={
	//增
	goodinsert:'INSERT INTO `good` (`id`,`name`,`price`,`img`) VALUES(?,?,?,?)',
	//删
	gooddelete: 'delete from good where id=?',
	//改
	goodupdate:'UPDATE `good` SET `name`=?,`price`=?,`img`=? WHERE `id`=?',
    //查
    goodAll: 'select * from good',
    goodById: 'select * from good where id=?'
}

module.exports=good;
