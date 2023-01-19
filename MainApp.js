const mainButton = document.querySelector('.main-button');
const quotes = document.querySelector('.quotes');
const pictures = document.querySelector('.pictures');

const nameAndQuotes = {
    name : [
        'STEPHENKING', 
        'EDISON', 
        'STEVEJOBS', 
        'KEVINBACON', 
        'CHARLIECHAPLIN'
    ],
    'STEPHENKING': 'The most important things are the hardest things to say. They are the things you get ashamed of because words diminish your feelings - words shrink things that seem timeless when they are in your head to no more than living size when they are brought out." - Stephen King', 
    'EDISON': 'If we all did the things we are really capable of doing, we would literally astound ourselves….” - Thomas Edison', 
    'STEVEJOBS': 'If we all did the things we are really capable of doing, we would literally astound ourselves….” - Steve Jobs', 
    'KEVINBACON': 'A good director creates an environment, which gives the actor the encouragement to fly. - Kevin Bacon',
    'CHARLIECHAPLIN' : 'I always like walking in the rain, so no one can see me crying... - Charlie Chaplin'
};

mainButton.addEventListener('click', function () {
    
    // Bài toán tìm 1 chỉ số ngẫu nhiên của 1 mảng cho trước:
    function nameIndex(x) {
        return Math.floor(Math.random() * x.length);
    };

    // Lấy ra 1 phần tử ngẫu nhiên trong mảng name và gán vào 1 biến:
    var randomName = nameAndQuotes.name[nameIndex(nameAndQuotes.name)];

    console.log(randomName);

    // Tạo đường dẫn đến file ảnh đã lưu thông qua giá trị biến randomName:
    pictures.style.backgroundImage = `url('./Pictures/${randomName}.jfif')`;

    // Từ phần tử ngẫu nhiên lấy được trong mảng name => lấy ra câu quote:
    quotes.textContent = nameAndQuotes[randomName];
})