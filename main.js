const datas = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }

]

const build = (data) => {
    return `
        <div class="card">
        <div class="currency">
            <p class='sub'>${data.sub}</p>
        </div>
        <h2 class='title'>${data.title}
            <hr>
        </h2>
        
        <p class='text'>${data.text}</p>
        <button>
            Save
            <span class="material-icons md-36">arrow_forward</span>
        </button>
        </div>
    `
}

function loadEvent() {
    console.log('the page has loaded');

    const root = document.querySelector('#root');
    for (const data of datas) {
        root.insertAdjacentHTML('beforeend', build(data))
    }
}

window.addEventListener("load", loadEvent);