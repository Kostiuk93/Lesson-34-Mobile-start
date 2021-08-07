// touchstart - при нажатии на экран
// touchmove - при движении пальца по экрану
// touchend - при завершении нажатия на экран
// touchenter - действие при нажатии на собитие чеез скольжении по экрану
// touchleave - действие при уходе скольжения от элемента
// touchcancel - когда точка соприкосновения больше не регистрируется на поверхности
// touches - выдает список всех пальцев, которые взаимодействую с экраном
// tarhetTouches - все пальцы, которые взаимодействуют с конкретным элементом 
// changedTouches - список пальцев, которые учавствуют в текущем событии

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        // принято прописывать для мобильных устройств prevenDefault() для отмены стандартного поведения браузера
        e.preventDefault(); 

        console.log('Start');
        console.log(e.changedTouches);
    });
    
    box.addEventListener('touchmove', (e) => {
        e.preventDefault(); 

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault(); 

        console.log('End');
    });
});

