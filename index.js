$(function () {
    console.log("hey")
// Elément du menu
    let $mainMenuItems = $("#main-menu ul").children("li"), //sélection de tous les éléments li
        totalMainMenuItems = $mainMenuItems.length, //nombre d'éléments li
        openedIndex = -1, //index de départ pour que tous les menus soient fermés

        //Passage de l'image colorée sur l'image bw au moment du click
        init = function () {
            bindEvents()
        };

        //Fonction relatif à l'évènement du click
        bindEvents = function () {

            $mainMenuItems.children(".images").click(function(){

                let newIndex = $(this).parent().index(),
                    $item = $mainMenuItems.eq(newIndex);

                    if (openedIndex == newIndex){
                        animateItem($item, false, 250);
                        openedIndex = -1
                    }else {
                        if(validIndex(newIndex)){
                        animateItem($mainMenuItems.eq(openedIndex), false, 250);
                        openedIndex = newIndex;
                        animateItem($item, true, 250)
                        }
                    }
                
                openedIndex = newIndex;

            });
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

        init();
})
