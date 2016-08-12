function AutoInsertManifest(){

}
AutoInsertManifest.prototype.apply = function(compiler){
    compiler.plugin('compilation',function(compilation){
        compilation.plugin('html-webpack-plugin-after-emit',function(file,callback){

            var manifest = '';
            Object.keys(compilation.assets).forEach(function(filename) {
                if (/\/?manifest./.test(filename)) {
                  manifest = '<script>' + compilation.assets[filename].source() + '//create auto</script>';
                }
            });
            if (manifest) {
                var htmlSource = file.html.source();
                htmlSource = htmlSource.replace(/(<\/head>)/, manifest + '$1');
                file.html.source = function() {
                  return htmlSource;
                };
            }
            callback(null,file);
        });
    });
};

module.exports = AutoInsertManifest;