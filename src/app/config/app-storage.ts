class AppStorage {
  public storage: Storage;

  constructor(storage?: Storage) {
    this.storage = storage || window.localStorage;

    if (!this.isSupported())
      throw new Error('Storage is not supported by browser!');
  }

  public setItem(key: string, value: string) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    return JSON.parse(this.storage.getItem(key) as string);
  }

  public removeItem(key: string) {
    this.storage.removeItem(key);
  }

  public clear() {
    this.storage.clear();
  }

  private isSupported() {
    let supported = true;
    if (!this.storage) supported = false;
    return supported;
  }
}

const appLocalStorage = new AppStorage();
const appSessionStorage = new AppStorage(window.sessionStorage);

export { appLocalStorage, appSessionStorage };
