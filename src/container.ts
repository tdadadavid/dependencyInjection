import { UserRepository } from './bootstrap'

export class Container {
  // this maps the name of the dependencies to the dependency.
  public readonly _deps: Record<string, any> = {};
  // the key to map each dependency
  public _key: string = "";

  // bind the key(name) to the container key
  bind(_key: string): this {
    this._key = _key;
    return this;
  }

  // map the key bounded above to the needed dependency.
  to(dependency: any): void {
    this._deps[this._key] = new dependency();
    this._key = "";
  }

  // get a specific dependency or else return undefined.
  get<T>(key: string){
    return this._deps[key] as T;
  }
}
