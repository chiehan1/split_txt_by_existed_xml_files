var fs = require("fs");
var glob = require("glob");

var fileRead = function(dir) {
	return fs.readFileSync(dir, "utf8");
}

var splitPbGet = function(refdir) {
	var reftext = fileRead(refdir);
}

var uniTextSplit = function(dir) {
	var wholetext = fileRead(dir);
	glob("./reference_jiangkangyur_files/**/*.xml", {nosort: true}, function(err, refdirs) {
		var splitPbs = refdirs.map(splitPbGet);
	});
}

glob("./wholetexts/*.txt", {nosort: true}, function(err, wholetxtdirs) {
	if (wholetxtdirs.length === 1) {
		uniTextSplit(dwholetxtdirs[0]);
	} if (wholetxtdirs.length > 1) {
		multiTextsSplit(wholetxtdirs);
	}
});




//var list = fs.readdirSync("./reference_jiangkangyur_files");

//console.log(wholetexts_list, list);
//var wholetext = fs.readFileSync("./wholetext.txt", "utf8");
/*
var split_by_pb = function(pb) {
	var splited_texts = wholetext.replace(pb, "~~~" + pb).split("~~~");
	
	var text_before_pb = splited_texts[0];
	fs.writeFileSync("./out.xml", text_before_pb, "utf8");

	var the_rest_text = splited_texts[1];
	wholetext = the_rest_text;
	fs.writeFileSync("./outwhole.xml", wholetext, "utf8");
}

split_by_pb('<pb id="1.17a"/>');
*/