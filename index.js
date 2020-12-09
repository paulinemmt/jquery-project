$(function () {
    console.log("hey")
// Elément du menu
    let $mainMenuItems = $("#main-menu ul").children("li"), //sélection de tous les éléments li
        totalMainMenuItems = $mainMenuItems.length, //nombre d'éléments li
        openedIndex = 2, //index de départ pour que tous les menus soient fermés

        //Passage de l'image colorée sur l'image bw au moment du click
        init = function () {
    bindEvents()
            if(validIndex(openedIndex)){
                animateItem($mainMenuItems.eq(openedIndex), true, 500)
            }
            
        };

        //Fonction relative à l'évènement du click
        bindEvents = function () {

            $mainMenuItems.children(".images").click(function(){

                let newIndex = $(this).parent().index();
                checkAnimateItem(newIndex);
            });

            // Fonctionnalité hover des boutons
            $(".button").hover(
                function(){
                    $(this).addClass("hovered");
                },
                function(){
                    $(this).removeClass("hovered");
                }
            );

            $(".button").click(
                function(){
                    let newIndex = $(this).index();
                    checkAnimateItem(newIndex);
                }
            )
        }

        //Vérification de la validité de l'index
        validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
        }


        //Anmation ouvrir/fermer les infos
        animateItem = function($item, toOpen, speed){

            let $colorImage = $item.find(".color"),
                itemParam = toOpen ? {width: "420px"}:{width: "140px"}, //?: vrai ou faux ?
                colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};

            $colorImage.animate(colorImageParam, speed); //décale l'image colorée sur l'image en bw
            $item.animate(itemParam, speed); //ouvre la description
        }

        // 
        checkAnimateItem = function(indexToCheckAndAnimate){

                    if (openedIndex == indexToCheckAndAnimate){
                        animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                        openedIndex = -1
                    }else {
                        if(validIndex(indexToCheckAndAnimate)){
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        openedIndex = indexToCheckAndAnimate;
                        animateItem($mainMenuItems.eq(openedIndex), true, 250)
                        }
                    }
        }

        init();
})
