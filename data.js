let games = [
    {
        id:1,
        title:"GTAV",
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        skrin1:"https://i.ytimg.com/vi/wrWyGaSWXBU/maxresdefault.jpg",
        skrin2:"https://i.ytimg.com/vi/RdGCN2mtgJQ/maxresdefault.jpg",
        info:`<pre>Grand Theft Auto V (сокр. GTA V) — компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Изначально игра была выпущена для игровых консолей PlayStation 3 и Xbox 360 в 2013 году, в 2014 году переиздана для PlayStation 4 и Xbox One, в 2015 году для Windows и в 2022 году для PlayStation 5 и Xbox Series X/S. Является пятнадцатой по счёту игрой серии Grand Theft Auto и следующей крупной игрой после Grand Theft Auto IV, выпущенной в 2008 году[9].</pre>`,
        min:`<pre>Операционная система: Windows 7/8/10 64-разрядная
        Процессор: Intel Core 2 Quad Q6600 4x2.4 ГГц / AMD Phenom 9850 4x2.5 ГГц
        Оперативная память: 4 ГБ
        Видеокарта: NVIDIA 9800 GT 1Гб / AMD HD 4870 1Гб
        Место на жестком диске: 65 ГБ
        </pre>`,
        max:`<pre>Операционная система: Windows 10 / Windows 11.
        Процессор: Intel Core i5-13600K 14x3.5 ГГц / AMD Ryzen 5 5600X 6x3.7 ГГц
        Видеокарта: NVIDIA RTX 3070 8 Гб / AMD RX 6650 XT 8 Гб
        Место на жестком диске: 65 ГБ</pre>`,
    },
    {
        id:1,
        title:"CS2",
        poster: "https://i0.wp.com/insider-gaming.com/wp-content/uploads/2023/10/counter-strike-2.jpg?fit=1280%2C720&ssl=1",
        skrin1:"https://www.vpesports.com/wp-content/uploads/2023/05/cs2.jpg",
        skrin2:"https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cgravity=auto%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/cs2-beginner-guide.png",
        info:`<pre>Counter-Strike 2 (сокр. CS2; с англ. — «Контрудар 2») — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensive[2].

Игра отличается крупными техническими улучшениями по сравнению с Global Offensive, включая переход с игрового движка Source на Source 2, улучшенную графику и новую клиент-серверную архитектуру. Кроме того, многие карты из Global Offensive были обновлены, чтобы использовать функции Source 2, а некоторые карты были полностью переработаны.

Valve анонсировала игру 22 марта 2023 года, объявив, что разработчики готовят релиз на лето 2023 года. Релиз игры состоялся 27 сентября 2023 года, заменив собою Global Offensive в Steam.</pre>`,
        min:`
        <pre>Видеокарта:
        Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0
        Да Процессор:
        Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better
        Да Оперативная память:
        2 GB RAM
        Жесткий диск:
        15 GB available space
        Операционная система:
        Windows® 7/Vista/XP
        DirectX:</pre>`,
        max:`<pre>Операционная система: Windows 11
        Процессор: Intel Core i7-13700KF 16x3.4 ГГц
        Оперативная память: 32 ГБ
        Видеокарта: GeForce RTX 4070 Ti 12 Гб
        Место на жестком диске: 85 ГБ</pre>`,
    },
    {
        id:1,
        title:"Dota2",
        poster: "https://upload.wikimedia.org/wikipedia/ru/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg",
        skrin1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCEYofaaBTqRrPDSgs6bcZg9LBz13ZVLtUw&s",
        skrin2:"https://cyber.sports.ru/dynamic_images/post/311/624/0/share/a820e4_no_text.jpg",
        info:`<pre> многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve. Игра является продолжением DotA — пользовательской карты-модификации для игры Warcraft III: Reign of Chaos и дополнения к ней Warcraft III: The Frozen Throne. Игра изображает сражение на карте особого вида; в каждом матче участвуют две команды по пять игроков, управляющих разными «героями» — персонажами с различными наборами способностей и характеристиками. Для победы в матче команда должна уничтожить особый объект — «крепость», принадлежащий вражеской стороне, и защитить от уничтожения собственную «крепость». Dota 2 работает по модели free-to-play с элементами микроплатежей.</pre>`,
        min:`<pre>ОС *: Windows 7 или новее
        Процессор: Двухъядерный процессор с тактовой частотой 2,80 ГГц от Intel или AMD.
        Оперативная память: 4 GB ОЗУ
        Видеокарта: NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600.
        DirectX: версии 11.
        Сеть: Широкополосное подключение к интернету
        Место на диске: 60 GB.</pre>`,
        max:`<pre>Операционная система: Windows 11.
        Процессор: Intel Core i5 13400 / AMD Ryzen 5 5600.
        Видеокарта: GeForce RTX 3060 Ti / Radeon RX 6750xt.
        Место на жестком диске: 60 ГБ</pre>`,
    }
]