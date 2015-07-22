var fs = require('fs');
var glob = require('glob');
var path = require('path');
//
//// 根据articles目录下的文章生成json
//gulp.task('build-data', function(callback) {
//  var dataPath = './app/data';
//  // 清理data目录
//  del.sync(dataPath);
//
//  // 创建目录
//  fs.mkdirSync(dataPath);
//
//
//
//});

var buildData = function(dataPath) {
  // TODO: 清除目录

  // TODO: 构建数据内容

  // TODO: 创建文件
}

function getArticleData(mdPath, callback) {
  // 遍历所有文章, 生成article数组
  glob(mdPath, function(er, files) {
    if (er) {
      console.log('create data error: ' + er);
      return;
    }

    var articleList = [];

    files.forEach(function(item) {
      var fileName = path.basename(item, '.md');
      var createDate = fileName.substr(0, 10);

      // 提取meta内容
      var fileContent = fs.readFileSync(item, {encoding: 'utf8'});
      var title = getArticleTitleFromContent(fileContent);

      var articleJsonFileName = fileName + '.json';
      // 构建article
      var article = {
        title: title,
        createDate: createDate,
        url: path.join('data/', articleJsonFileName),
        fileName: fileName,
        content: fileContent
      };


      // 数组前插入
      articleList.splice(0, 0, article)

    })


    callback(articleList);
  });
}

/**
 * OriginalArticleObject
 * title 标题
 * fileName 原文件名，不包含扩展
 * createDate 创建日期
 * content md内容
 */

/**
 * ArticleJsonObject
 * title 标题
 * fileName 原文件名，不包含扩展
 * createDate 创建日期
 * content md内容
 */

/**
 * ArticleListJsonObject
 * title 标题
 * fileName 原文件名，不包含扩展
 * createDate 创建日期
 */

function createArticleListJson(originalArticleList, dataPath) {
  originalArticleList.forEach(function(item) {
    var filePath = path.join(dataPath, item.fileName + '.json');
    var articleData = item;
    fs.writeFileSync(filePath, JSON.stringify(articleData));
  })
}

function createAllArticlesJson(originalArticleList, dataPath) {
  var articleListJsonArray = [];
  originalArticleList.forEach(function(item) {
    articleListJsonArray.push({
      title: item.title,
      fileName: item.fileName,
      createDate: item.createDate
    });
  });

  var articleListPath = path.join(dataPath, 'articleList.json');
  fs.writeFileSync(articleListPath, JSON.stringify(articleListJsonArray));
}

// 取得md文件的第一个标题
function getArticleTitleFromContent(content) {
  var re = /^[#]+.*$/m;
  var lines = content.match(re);
  var line = lines ? lines[0] : '';
  //console.log(lines);
  var title = line.substring(line.indexOf(' '));

  return title;
}

// test
function ttt() {
  //var testContent = '  \
  //# Da Jia Hao\
  //## blablalba\
  //xixixi\
  //';

  var testContent = '# Da Jia Hao\n## hihi\nxixixix';
  //var testContent = '   \n Da Jia Hao\n  hihi\nxixixix';

  console.log(getArticleTitleFromContent(testContent));
};

module.exports = {
  getArticleData: getArticleData,
  createArticleListJson: createArticleListJson,
  createAllArticlesJson: createAllArticlesJson
}
