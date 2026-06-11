export class Collection<T> {
  constructor(private collection: T[]) {}

  getAllCollectionItems(): T[] {
    return this.collection;
  }

  getCollectionItem(index: number): T | undefined {
    return this.collection[index];
  }

  clearCollection(): void {
    this.collection = [];
  }

  removeCollectionItem(index: number): void {
    this.collection.splice(index, 1);
  }

  substituteCollectionItem(index: number, newItem: T): void {
    this.collection[index] = newItem;
  }
}

const numbers = new Collection<number>([5, 23, 99]);
const string = new Collection<string>(['Moscow', 'Kazan', 'Yelabuga']);
