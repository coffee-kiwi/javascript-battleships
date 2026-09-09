# Battleships

英語の後に日本語が続きます。

## 🌟 Highlights

- A browser-based implementation of the classic Battleships game, built with vanilla JavaScript as part of The Odin Project curriculum.

- Designed as a local two-player game played on a shared device, with a dedicated transition screen between turns so the device can be passed between players without revealing the other player's fleet.

- Players can place their fleet manually using either click-to-place or drag-and-drop controls, with visual placement previews and validation to prevent invalid ship positions.

- Game logic and application state are separated from DOM manipulation through a modular JavaScript structure.

- Used Jest and test-driven development for the core game logic, including ship placement, attacks, ship state, and game-end conditions.

- Uses Webpack for bundling and development tooling, with Babel, ESLint, and Prettier supporting the development workflow.

- Built with responsive HTML and CSS and deployed using GitHub Pages.


## 🚀 Play the Game

- You can play Battleships here: [coffee-kiwi.github.io/javascript-battleships](https://coffee-kiwi.github.io/javascript-battleships/)

- Battleships is designed as a local two-player game played on a shared device. Each player places their fleet using either click-to-place or drag-and-drop controls.

- After each attack, the game switches to a transition screen before revealing the next player's board, allowing the device to be passed between players without exposing the other player's fleet.


## ℹ️ Overview

Battleships is a browser-based implementation of the classic Battleships game, built as part of The Odin Project's JavaScript curriculum. The project focused on using JavaScript to separate application logic from the user interface, while using Jest to test the game's core logic.

I built the game as a local two-player experience played on a shared device. In addition to implementing the underlying game logic, I designed and built the ship placement system, including click-to-place and drag-and-drop controls, visual placement previews, ship orientation, and validation to prevent invalid placements.

One of the main challenges was keeping the application's state and user interface synchronized as players placed ships, made attacks, and moved between turns. To support two players sharing the same device, I implemented a transition screen that hides the game boards at the end of each turn and prompts the players to pass the device. Once the next player is ready, their game boards are rendered and the next turn begins.

Throughout the project, I worked with modular JavaScript, DOM manipulation, event handling, application state, unit testing with Jest, and development tooling including Webpack, Babel, ESLint, and Prettier.


## 💻 Tech Stack

- Language: JavaScript (ES6+)
- Frontend: HTML5, CSS3
- Testing: Jest
- Build Tool: Webpack
- Transpilation: Babel
- Code Quality: ESLint, Prettier
- Version Control: Git, GitHub
- Deployment: GitHub Pages


## ⚠️ Challenges and What I Learned

### 🚢 Ship Placement and Drag-and-Drop

One of the most challenging features I worked on was the drag-and-drop ship placement system. I had not implemented drag-and-drop interactions before, so I needed to understand how to keep track of which ship a player was moving and then connect that information to the location where the ship was dropped.

My initial approach used the dragged element's ID to identify the selected ship, such as a cruiser or patrol ship, and stored that value so it could later be used by the ship placement logic. The current implementation follows the same underlying idea: the selected ship is stored in the application's game state when dragging begins, and the target row and column are taken from the board cell when the ship is dropped.

This allowed the drag-and-drop interaction to reuse the same underlying ship placement logic rather than treating it as a completely separate system. Working through the feature helped me better understand event-driven JavaScript, application state, and how user interactions can be connected to underlying game logic.


### 🔄 Managing Game State and Player Turns

Another challenge was keeping the game state and user interface synchronized throughout each player's turn. The application needed to render the correct boards for each player, display the results of attacks, prevent previously attacked cells from being selected again, and hide the game boards while the device was passed between players.

I tried to keep individual buttons responsible for a single action, so several controls occupy the same area of the interface and are shown or hidden depending on the current stage of the game. This helped me manage the different actions required during gameplay and the transition between players.

As the interface became more detailed, I also found that my original representation of each gameboard cell was no longer sufficient. Initially, cells could contain values such as `null`, `"X"`, `"O"`, or a ship object. When I later added different colors for each ship, replacing a ship with a simple hit marker meant losing information that the rendering logic still needed.

I changed the representation of a successful hit to retain structured information, including whether the cell had been hit and the name of the ship occupying it. This allowed the application to preserve the ship's identity after an attack, render the appropriate visual state, and prevent the same cell from being attacked again.

Working through these problems helped me understand the importance of designing application state around the information the interface needs, as well as keeping state changes and DOM updates synchronized throughout a multi-step user interaction.


### 🧩 Project Structure and Separation of Concerns

As the project grew, keeping the code organized became increasingly difficult. The initial structure worked well with only a few modules, but as I added event listeners, drag-and-drop interactions, click-based placement, and more DOM manipulation, `index.js` became too large and contained many repeated DOM queries.

I refactored the project by separating some of these responsibilities into dedicated modules. DOM element references were moved into `DOMElements.js`, while shared application state was moved into `gameState.js` and accessed through getter and setter functions. I also separated areas such as event handling and drag-and-drop functionality rather than continuing to add everything to the main entry file.

I used Claude as a learning tool during this refactoring, particularly to explore ways of organizing the growing number of DOM references and managing shared state between modules. I used those suggestions to understand the approach and restructure the application.

Looking back at the finished project, I can still see areas I would improve. In a future project, I would use clearer module names and think more carefully about which module should own each function and responsibility. This project helped me understand that separating code into files is only part of modular design; clear responsibilities and boundaries between those modules are equally important.


### 🧪 Testing the Game Logic

The project introduced me to test-driven development using Jest. Following The Odin Project curriculum, I initially focused on building and testing the underlying game logic separately from the user interface.

I used a test-driven approach for core functionality such as ship placement, receiving attacks, and determining when ships had been sunk. Writing tests alongside this logic helped me think about the expected behavior of each function before connecting it to the interface.

Once development moved into DOM-heavy features such as ship placement controls and drag-and-drop interactions, I stopped using TDD for those parts of the application. The curriculum had not yet introduced testing browser interfaces, so I focused the automated tests on the underlying game logic rather than attempting to test the DOM interactions.

I later added tests around the game's end conditions to verify that the game finished correctly when a player's fleet had been sunk.

This project gave me my first practical experience with TDD and helped me understand both the value of keeping application logic testable independently from the interface and the boundaries of what my test suite covered.


## ✍️ Author

My name is Conor. I am currently transitioning into web development after approximately 10 years of professional experience in education in Japan and Taiwan. I have been developing my skills through The Odin Project's Full Stack Ruby on Rails curriculum and building projects with Ruby on Rails, JavaScript, PostgreSQL, Git, HTML, and CSS.

I am now looking to begin my professional career as a web engineer and continue developing my skills through real-world software development.

You can find more about me on:

- [My Portfolio](https://coffee-kiwi.github.io/)


## 🛠️ Running Locally

To run Battleships locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/coffee-kiwi/javascript-battleships.git
2. Navigate to the project directory:
   
   cd javascript-battleships

3. Install dependencies:

   npm install

4. Start the development server:

   npm start

To run the Jest test suite:

   npm test

To create a production build:

   npm run build

## 💭 Feedback and Contributing

Feedback and suggestions are always welcome. If you notice something that could be improved or have ideas for the project, feel free to open an issue or get in touch.


## 🌟 ハイライト

- The Odin Projectのカリキュラムの一環として、Vanilla JavaScriptを使用して開発した、ブラウザ上で遊べるBattleships（海戦ゲーム）です。

- 1台の端末を2人で共有して遊べるローカル対戦ゲームとして設計しました。ターンの切り替え時には専用の画面を表示し、相手に自分の艦隊を見られることなく端末を交代できるようにしています。

- 艦船の配置は、クリック操作とドラッグ＆ドロップの両方に対応しています。配置位置のプレビューやバリデーションも実装し、無効な位置には配置できないようにしています。

- モジュール化したJavaScript構成により、ゲームロジックやアプリケーションの状態管理とDOM操作を分離しています。

- 艦船の配置、攻撃、艦船の状態、ゲーム終了条件などのコアゲームロジックでは、Jestを使用したテスト駆動開発（TDD）に取り組みました。

- Webpackを使用してバンドルや開発環境を構築し、Babel、ESLint、Prettierも開発ワークフローに取り入れています。

- HTML/CSSでレスポンシブ対応し、GitHub Pagesで公開しています。


## 🚀 ゲームをプレイ

- Battleshipsはこちらからプレイできます：[coffee-kiwi.github.io/javascript-battleships](https://coffee-kiwi.github.io/javascript-battleships/)

- Battleshipsは、1台の端末を2人で共有して遊べるローカル対戦ゲームとして設計しています。各プレイヤーは、クリック操作またはドラッグ＆ドロップで自分の艦隊を配置できます。

- 攻撃が終わるたびにターン切り替え画面が表示されます。次のプレイヤーのボードが表示される前に端末を交代できるため、お互いの艦隊を見せることなくゲームを進められます。


## ℹ️ 概要

Battleshipsは、The Odin ProjectのJavaScriptカリキュラムの一環として開発した、ブラウザ上で遊べる海戦ゲームです。このプロジェクトでは、JavaScriptを使用してアプリケーションロジックとユーザーインターフェースを分離すること、そしてJestを使用してコアゲームロジックをテストすることに重点を置きました。

1台の端末を2人で共有して遊べるローカル対戦ゲームとして開発しました。基本的なゲームロジックに加えて、クリック操作とドラッグ＆ドロップの両方に対応した艦船配置システムを実装しています。配置位置のプレビュー、艦船の向きの変更、無効な配置を防ぐバリデーションなども実装しました。

開発における主な課題の一つは、プレイヤーが艦船を配置し、攻撃し、ターンを交代する中で、アプリケーションの状態とユーザーインターフェースを正しく同期させることでした。1台の端末を2人で共有できるよう、各ターンの終了時にゲームボードを非表示にし、端末を次のプレイヤーに渡すよう促すターン切り替え画面を実装しました。次のプレイヤーが準備できたら、そのプレイヤー用のゲームボードを表示して次のターンを開始します。

このプロジェクトを通して、モジュール化したJavaScript、DOM操作、イベント処理、アプリケーションの状態管理、Jestを使用したユニットテストに加え、Webpack、Babel、ESLint、Prettierなどの開発ツールを実践的に使用しました。


## 💻 技術スタック

- 言語：JavaScript (ES6+)
- フロントエンド：HTML5、CSS3
- テスト：Jest
- ビルドツール：Webpack
- トランスパイル：Babel
- コード品質：ESLint、Prettier
- バージョン管理：Git、GitHub
- デプロイ：GitHub Pages


## ⚠️ 課題と学んだこと

### 🚢 艦船配置とドラッグ＆ドロップ

特に難しかった機能の一つが、ドラッグ＆ドロップによる艦船配置システムでした。それまでドラッグ＆ドロップを実装した経験がなかったため、プレイヤーがどの艦船を動かしているのかを保持し、その情報をドロップ先の位置と結びつける方法を理解する必要がありました。

最初の実装では、ドラッグされた要素のIDを使用して、巡洋艦や哨戒艇など、選択された艦船を識別し、その値を保存して艦船配置ロジックで使用していました。現在の実装でも基本的な考え方は同じで、ドラッグ開始時に選択された艦船をアプリケーションの状態として保存し、ドロップ時にボードのセルから対象となる行と列を取得しています。

この仕組みにより、ドラッグ＆ドロップ専用の配置処理を別に作るのではなく、既存の艦船配置ロジックを再利用できるようになりました。この機能の実装を通して、イベント駆動型のJavaScript、アプリケーションの状態管理、そしてユーザー操作とゲームロジックを連携させる方法について理解を深めることができました。

### 🔄 ゲーム状態とプレイヤーターンの管理

もう一つの課題は、各プレイヤーのターンを通して、ゲームの状態とユーザーインターフェースを正しく同期させることでした。各プレイヤーに適切なボードを表示し、攻撃結果を反映し、一度攻撃されたセルを再び選択できないようにするとともに、端末を次のプレイヤーに渡す間はゲームボードを非表示にする必要がありました。

各ボタンにはできるだけ一つの役割だけを持たせるようにし、ゲームの進行状況に応じて、同じエリアに配置した複数のボタンの表示・非表示を切り替える仕組みにしました。これにより、ゲーム中に必要となるさまざまな操作や、プレイヤー交代時の処理を管理しました。

UIをより細かく作り込んでいく中で、当初のゲームボードの各セルのデータ構造では、必要な情報を十分に保持できないことにも気づきました。最初は、各セルに `null`、`"X"`、`"O"`、または艦船オブジェクトなどの値を格納していました。しかし、後から艦船ごとに異なる色を表示する機能を追加した際、攻撃が成功したセルを単純なヒット判定用の値に置き換えると、描画に必要な艦船の情報が失われてしまいました。

そこで、攻撃が成功したセルには、ヒットしたかどうかだけでなく、そのセルに配置されていた艦船の名前も含む構造化されたデータを保持するように変更しました。これにより、攻撃後も艦船の情報を保持したまま、適切な表示を行い、同じセルが再度攻撃されることも防げるようになりました。

この課題を通して、UIで必要となる情報を考慮してアプリケーションの状態を設計することの重要性と、複数の処理が連続するユーザー操作の中で、状態の変更とDOMの更新を正しく同期させることの重要性を学びました。

### 🧩 プロジェクト構成と関心の分離

プロジェクトの規模が大きくなるにつれて、コードを整理して管理することが難しくなっていきました。モジュールが少ないうちは最初の構成でも問題ありませんでしたが、イベントリスナー、ドラッグ＆ドロップ、クリックによる艦船配置、DOM操作などを追加していくうちに、`index.js`が大きくなり、多くのDOM要素を取得する処理も含まれるようになりました。

そこで、役割の一部を専用のモジュールに分離するようリファクタリングしました。DOM要素への参照は`DOMElements.js`にまとめ、アプリケーション全体で共有する状態は`gameState.js`に移し、getter/setter関数を通してアクセスするようにしました。また、イベント処理やドラッグ＆ドロップなどの機能も、メインのエントリーファイルに追加し続けるのではなく、それぞれ別のモジュールに分けました。

このリファクタリングでは、Claudeを学習ツールとして使用し、増えていくDOM要素への参照を整理する方法や、モジュール間で共有する状態を管理する方法について検討しました。提案された方法や考え方を理解した上で、自分のアプリケーションの構成に取り入れました。

完成したプロジェクトを振り返ると、まだ改善できる点があると感じています。今後同様のプロジェクトを開発する際には、モジュール名をより分かりやすくし、それぞれの関数や処理をどのモジュールが担当すべきかを、より明確に設計したいと考えています。このプロジェクトを通して、コードを複数のファイルに分けるだけでは十分ではなく、それぞれのモジュールの責務と境界を明確にすることも、モジュール設計において重要だと学びました。

### 🧪 ゲームロジックのテスト

このプロジェクトを通して、Jestを使用したテスト駆動開発（TDD）を初めて実践しました。The Odin Projectのカリキュラムに沿って、まずユーザーインターフェースとは分離したゲームロジックの実装とテストに取り組みました。

艦船の配置、攻撃の処理、艦船が沈んだかどうかの判定など、コアとなる機能ではTDDを意識して開発しました。これらのロジックと並行してテストを書くことで、UIと連携させる前に、それぞれの関数に期待する動作を考えながら実装する経験ができました。

その後、DOM操作を多く含む艦船配置のUIやドラッグ＆ドロップなどの機能を開発する段階では、それらの部分にはTDDを使用しませんでした。カリキュラムではまだブラウザ上のUIをテストする方法を扱っていなかったため、DOM操作を無理にテストするのではなく、自動テストの対象を基礎となるゲームロジックに絞りました。

また、ゲームの終了条件についても後からテストを追加し、プレイヤーの全艦船が沈んだ際にゲームが正しく終了することを確認しました。

このプロジェクトでは、TDDを実際の開発に取り入れる最初の経験を得るとともに、アプリケーションロジックをUIから分離してテスト可能な状態に保つことのメリットと、自分が作成したテストスイートがどこまでをカバーしているのかを理解することの重要性を学びました。


## ✍️ 作者について

## ✍️ 作者について

Conorです。日本と台湾の教育業界で約10年間の実務経験を積んだ後、現在はWeb開発へのキャリアチェンジを目指しています。The Odin ProjectのFull Stack Ruby on Railsカリキュラムを通してスキルを身につけながら、Ruby on Rails、JavaScript、PostgreSQL、Git、HTML、CSSを使用したプロジェクトを開発しています。

現在はWebエンジニアとしてプロフェッショナルなキャリアをスタートし、実際のソフトウェア開発を通してさらにスキルを伸ばしていきたいと考えています。

詳しいプロフィールはこちら：

- [ポートフォリオ](https://coffee-kiwi.github.io/)


## 🛠️ ローカル環境での実行

Battleshipsをローカル環境で実行するには：

1. リポジトリをクローンします：

   ```bash
   git clone https://github.com/coffee-kiwi/javascript-battleships.git

2. プロジェクトディレクトリに移動します：

   cd javascript-battleships

3. 依存関係をインストールします：

   npm install

4. 開発サーバーを起動します：

   npm start

Jestのテストスイートを実行するには：

   npm test

本番用のビルドを作成するには：

   npm run build


## 💭 フィードバックとコントリビューション

フィードバックやご提案はいつでも歓迎しています。改善できる点やプロジェクトに関するアイデアがありましたら、お気軽にIssueを作成するか、ご連絡ください。