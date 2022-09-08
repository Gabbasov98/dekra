<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Контакты");
?>

<section class='contacts'>
    <div class='container'>
        <div class="contacts__inner">
            <div class='breadcrumbs'>
                <a href="" class="breadcrumbs__item">Главная</a>
                <!--  -->

                <span class="breadcrumbs__item">Контакты</span>
                <!--  -->

                <!--  -->



            </div>
            <h1 class="contacts__title display2">Контакты</h1>
            <div class="contacts__items">
                <div class="contacts__col">
                    <div class="contacts__subtitle contacts-tab display5 orange-text" data-map="1">Главный офис</div>
                    <div class="contacts__address body-text2">
                        123182, г. Москва, <br>ул. Авиационная д. 77.
                    </div>
                    <a href="tel:+74959560077" class="contacts__phone body-text2">+7 (495) 956-00-77</a>
                    <div class="contacts__mail">
                        <div class="contacts__mail-item body-text2">
                            Общие вопросы - <a href="mailto:info@dekra.ru">info@dekra.ru</a>
                        </div>
                        <div class="contacts__mail-item body-text2">
                            Тендерный отдел - <a href="mailto:newprojects@dekra.ru">newprojects@dekra.ru</a>
                        </div>
                    </div>
                </div>
                <div class="contacts__col">
                    <div class="contacts__subtitle contacts-tab display5" data-map="2">Представительский офис</div>
                    <div class="contacts__address body-text2">
                        121151, г. Москва, <br> наб. Тараса Шевченко, 23А, <br> «Башня 2000» сектор «Б», 27 этаж.
                    </div>
                    <a href="tel:+74956538135" class="contacts__phone body-text2">+7 (495) 653-81-35</a>
                </div>
                <div class="contacts__col">
                    <div class="contacts__subtitle display5">Адреса строящихся объектов</div>
                    <div class="contacts__info">
                        <div class="contacts__info-item">
                            <div class="contacts__info-title body-text2">ЖК «Сколково Парк для Жизни»</div>
                            <div class="contacts__info-desc body-text2">
                                Координаты:
                                <span> 8912837 1238123</span>
                            </div>
                            <a href="" class="contacts__info-link body-text2">Посмотреть на карте</a>
                        </div>
                        <div class="contacts__info-item">
                            <div class="contacts__info-title body-text2">ЖК «Сколково Парк для Жизни»</div>
                            <div class="contacts__info-desc body-text2">
                                Координаты:
                                <span> 8912837 1238123</span>
                            </div>
                            <a href="" class="contacts__info-link body-text2">Посмотреть на карте</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="map1" class="map map--active">
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A30bc8b9e7783683e4d2e337d9831edf2522997b5bb0f12f0a12856b04010c751&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>
            </div>
            <div id="map2" class="map">
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afd32e8170994a23717e2311257e8c453c8c48fa09b474ab1fd03df73fdd51498&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>
            </div>
        </div>
    </div>
</section>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>