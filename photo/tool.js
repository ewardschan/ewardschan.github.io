 "use strict";
    const fs = require("fs");
    const path = "../../../EcBlog-Back-Up/photos";

    fs.readdir(path, function (err, files) {
        if (err) {
            return;
        }
        let arr = [];
        (function iterator(index) {
            if (index == files.length) {
                fs.writeFile("output.json", JSON.stringify(arr, null, "\t"),function(err){  
                if(err)  
                    return console.error(err);  
                console.log('写入文件成功');  
            });
                return;
            }

            fs.stat(path + "/" + files[index], function (err, stats) {
                if (err) {
                    return;
                }
                if (stats.isFile()) {
                    arr.push(files[index]);
                }
                iterator(index + 1);
            })
        }(0));
    });
