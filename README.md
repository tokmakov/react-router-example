[React Router, версия 6. Часть 1 из 4](https://tokmakov.msk.ru/blog/item/675)

Совсем недавно разбирался с роутингом в react-приложениях, но вышла 6 версия модуля react-router-dom — и пришлось разбираться заново. В новой версии больше нет Switch, теперь нужно использовать Routes, вместо атрибута component внутри Route теперь атрибут element. Атрибуты path и to внутри Route и Link теперь могут быть относительными…

[React Router, версия 6. Часть 2 из 4](https://tokmakov.msk.ru/blog/item/676)

Давайте вместо простого компонента Blog.js создадим в директории src/blog несколько других — BlogLayout.js, BlogIndex.js, BlogCategory.js и BlogArticle.js. Кроме того, создадим файл с данными BlogData.js, где будем хранить категории и статьи блога. Но для начала изменим компонент App.js…

[React Router, версия 6. Часть 3 из 4](https://tokmakov.msk.ru/blog/item/677)

Хук useHistory был удален из React Router 6, теперь вместо него useNavigate. В принципе, использование этих двух хуков мало чем отличается. Хук возвращает функцию, которая в качестве первого аргумента принимает строку URL или целое число. Целое число может быть положительным (движение вперед по истории)…

[React Router, версия 6. Часть 4 из 4](https://tokmakov.msk.ru/blog/item/678)

Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения. Значение — это объект URLSearchParams, у которого множество методов для работы с GET-параметрами (get, set, getAll, has, append, delete, …).

    git clone git@github.com:tokmakov/react-router-example.git
    cd react-router-example/app
    npm install
    npm start

Пример работы приложения [здесь](https://tokmakov.github.io/react-router-example).
