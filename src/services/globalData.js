class GlobalData {
    constructor() {
        this._login = false;
    }

    login = (theValue) => {
        this._login = theValue;
    }

    isLogin = () => this._login;
}

export const globalData = new GlobalData();