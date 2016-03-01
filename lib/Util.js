/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2016 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 1.0.0 | http://apidev.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///                                              }|
///                                              }|
///                                              }|     　 へ　　　 ／|    
///      _______     _______         ______      }|      /　│　　 ／ ／
///     /  ___  |   |_   __ \      .' ____ '.    }|     │　Z ＿,＜　／　　 /`ヽ
///    |  (__ \_|     | |__) |     | (____) |    }|     │　　　　　ヽ　　 /　　〉
///     '.___`-.      |  __ /      '_.____. |    }|      Y　　　　　`　 /　　/
///    |`\____) |    _| |  \ \_    | \____| |    }|    ｲ●　､　●　　⊂⊃〈　　/
///    |_______.'   |____| |___|    \______,'    }|    ()　 v　　　　|　＼〈
///    |=========================================\|    　>ｰ ､_　 ィ　 │ ／／
///    |> LESS IS MORE                           ||     / へ　　 /　ﾉ＜|＼＼
///    `=========================================/|    ヽ_ﾉ　　(_／　 │／／
///                                              }|     7　　　　　　  |／
///                                              }|     ＞―r￣￣`ｰ―＿`
///                                              }|
///                                              }|
/// Permission is hereby granted, free of charge, to any person obtaining a copy
/// of this software and associated documentation files (the "Software"), to deal
/// in the Software without restriction, including without limitation the rights
/// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
/// copies of the Software, and to permit persons to whom the Software is
/// furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in all
/// copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
/// THE SOFTWARE.


var Util = module.exports = function Util() {
    /// <summary>
    /// Util 提供静态的工具函数类型。</summary>

    throw new Error("静态类型不能创建实例对象。");
}


var File = module.exports = function File() {
    /// <summary>
    /// File 类用于表示单个文件的相关信息。</summary>
}


var Stage = module.exports = function Stage() {
    /// <summary>
    /// Stage 类用于储存历史文件的相关信息。</summary>

    throw new Error("静态类型不能创建实例对象。");
}


Util.digest = function digest( path, algorithm, encoding ) {
    /// <summary>
    /// 使用指定的路径字符串生成一段 hash 摘要。</summary>
    /// <param name='path' type='String'>
    /// 必须，指定生成 hash 值的路径字符串。</param>
    /// <param name='algorithm' type='String' optional='true'>
    /// 可选，默认值："sha1"。指定生成 hash 的算法名称。</param>
    /// <param name='encoding' type='String' optional='true'>
    /// 可选，默认值："hex"。指定 hash 结果的编码名称。</param>
    /// <returns type='String'>
    /// 返回由该哈希算法生成的 hash 值。</returns>

    return require('crypto').createHash(algorithm || "sha1").update(path)
          .digest(encoding || "hex");
}


Util.resolve = function resolve( path ) {
    /// <summary>
    /// 将指定的路径字符串转换成本地磁盘的绝对路径。</summary>
    /// <param name='path' type='String'>
    /// 必须，指定需要转换成绝对路径的路径字符串。</param>
    /// <returns type='String'>
    /// 返回一个新的绝对路径字符串。</returns>

    return require('path').resolve(path);
}


Util.travel = function travel( path, cache ) {
    /// <summary>
    /// 获取指定文件的依赖项列表（包括子文件的所有依赖项）。</summary>
    /// <param name='path' type='String'>
    /// 必须，指定文件的本地磁盘路径。</param>
    /// <param name='cache' type='Boolean' optional='true'>
    /// 可选，默认值：true。指定是否使用文件缓存策略。
    ///    （Ps：文件缓存策略用于提高文件遍历的速度。)</param>
    /// <returns type='Array'>
    /// 返回一个按加载顺序先后排序的数组，数组中每一个元素都是 File 类型的对象。</returns>
}


Util.storeHistories = function storeHistories( filename ) {
    /// <summary>
    /// 用于将当前所有的文件历史信息储存进本地磁盘中。</summary>
    /// <param name='filename' type='String' optional='true'>
    /// 可选，默认值："histories.json"。指定用于保存的文件名称。</param>
}


Util.updateHistories = function updateHistories( filename ) {
    /// <summary>
    /// 更新文件历史信息。</summary>
    /// <param name='filename' type='String' optional='true'>
    /// 可选，默认值："histories.json"。指定用于更新的文件名称。</param>
}


Util.clearHistories = function clearHistories( filename ) {
    /// <summary>
    /// 清除历史文件信息。</summary>
    /// <param name='filename' type='String' optional='true'>
    /// 可选，默认值："histories.json"。指定需要清除的文件名称。</param>
}


Util.getContents = function getContents( filename, options ) {
    /// <summary>
    /// 获取指定 File 文件的文件内容。</summary>
    /// <param name='filename' type='String'>
    /// 必须，指定用于读取文件内容的路径字符串。</param>
    /// <param name='options' type='String'>
    /// 可选，默认值：null。指定读取文件操作选项。</param>
    /// <returns type='Buffer'>
    /// 返回一个 Buffer 对象，该对象用于储存文件的内容。</returns>

    return require('fs').readFileSync(file, options || null);
}


Util.getComments = function getComments( buffer ) {
    /// <summary>
    /// 获取指定文件头部的 `&lt;reference&gt;` 注释声明。</summary>
    /// <param name='buffer' type='Buffer'>
    /// 必须，指定该文件的 Buffer 文件内容对象。</param>
    /// <returns type='Buffer'>
    /// 返回仅包含 `&lt;reference&gt;` 注释声明的 Buffer 对象。</returns>
}


Util.getDependencies = function getDependencies( buffer ) {
    /// <summary>
    /// 获取指定文件的依赖文件列表。</summary>
    /// <param name='buffer' type='Buffer'>
    /// 必须，指定包含该文件的 `&lt;reference&gt;` 注释声明的 Buffer 对象。</param>
    /// <returns type='Array'>
    /// 返回一个数组，数组按引用顺序列出指定文件所依赖的文件的文件路径。</returns>
}
