import { BehaviorSubject } from "rxjs";

export class SubjectManager {
  private observable: BehaviorSubject<string> = new BehaviorSubject("");

  get getObservable() {
    return this.observable.asObservable();
  }

  set setObservable(value: any) {
    this.observable.next(value);
  }
}

export const sharinInformationNameImage = new SubjectManager();
