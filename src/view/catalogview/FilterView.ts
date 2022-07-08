class FilterView {
    sortMode: Number;
    buttonPrice: HTMLElement;
    buttonRelease: HTMLElement;

    constructor() {
        
    }

    render() {
        return `
        <div class="filterview" >
        <input type="editbox" class="search__input underline" placeholder="search" ></input>
        <span class="button button-search underline noselect">filter</span><span class="button button-search underline noselect">clear</span>
        <div><span class="button button-price underline noselect">price: hi -> low</span><span class="button button-release underline noselect">release</span></div>
        </div>
        `
    }

    switch(mode: Number) {
        console.log('mode', mode);
    }
}

export {FilterView};