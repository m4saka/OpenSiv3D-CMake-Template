# OpenSiv3D CMake Template (for Windows)

CMakeを使用したOpenSiv3DのWindows(MSVC)用プロジェクトテンプレートです。

## 準備

OpenSiv3Dの公式サイト( https://siv3d.github.io/ja-jp/ )から、OpenSiv3D SDK v0.4.3をダウンロード・インストールしてください。  
(※異なるバージョンのOpenSiv3Dを使用する場合は、CMakeLists.txt内に書かれている`$ENV{SIV3D_0_4_3}`を適宜修正してください。)

## ビルド方法

3種類の方法があるので、いずれか1つの方法でビルドしてください。

### ■ 方法1. Visual Studioでビルドする方法(オススメ)

最近のVisual StudioはCMakeLists.txtの読み込みに対応してくれているので、CMakeのプロジェクトが簡単にビルドできます。

1. Visual Studioを起動し、「ローカル フォルダーを開く」(または「ファイル」→「開く」→「フォルダー」)でリポジトリのフォルダを開きます。

2. 再生ボタンに「スタートアップ アイテムの選択...」と書かれているので、右側の▼をクリックして「game.exe」を選択します。

3. 再生ボタンで実行できます。Releaseでビルドしたい場合は、再生ボタンの左側にある「x64-Debug」を「x64-Release」に変更してください。

### ■ 方法2. cmakeコマンドでビルドする方法

コマンドプロンプトで以下のコマンドを実行してください。  
(事前にcmake.exeへのパスを通しておく必要があります。)

```
> cd build
> cmake ..
> cmake --build .
```

これを実行すると、実行ファイルが`build/Debug/game.exe`に生成されます。

上記の場合はターゲットがDebugになっています。  
ターゲットをReleaseにしてビルドしたい場合、以下のように最後のコマンドの後ろに`--config Release`を付けます。

```
> cmake --build . --config Release
```

これを実行すると、実行ファイルが`build/Release/game.exe`へ生成されます。

### ■ 方法3. cmake-guiでビルドする方法

1. cmake-guiを開きます。

2. 1番目の「Where is the source code:」にCMakeLists.txtが入ったディレクトリを、2番目の「Where to build the binaries:」にbuildディレクトリを指定します。

3. ウィンドウ下部の「Generate」ボタンを押すとウィンドウが出てくるので、そのまま「Finish」ボタンを押します。

4. 「Open Project」ボタンを押すと、Visual Studioが開きます。

5. ソリューションエクスプローラー上で「game」を右クリックし、「スタートアップ プロジェクトに設定」をクリックします。

6. 再生ボタンで実行できます。Releaseでビルドしたい場合は、再生ボタンの左側にある「Debug」を「Release」に変更してください。

## ライセンス

本プロジェクトテンプレート内のサンプルプログラムおよびリソースファイルはOpenSiv3Dのものを使用しています。  
ご利用の際は、下記のOpenSiv3Dのライセンスを記載してください。

`CMakeLists.txt`など、本プロジェクトテンプレートで追加されたファイルについては[CC0ライセンス](https://creativecommons.org/choose/zero/?lang=ja)とします(著作権表記なしで自由にご利用いただけます)。

```
MIT License

Copyright (c) 2008-2019 Ryo Suzuki
Copyright (c) 2016-2019 OpenSiv3D Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
