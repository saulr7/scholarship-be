export default interface IService<T> {
	validate(model: T): Promise<boolean>
	create(model: T): Promise<T>
	update(model: T): Promise<T>
	delete(model: T): Promise<T>
	getById(id: number): Promise<T>
}
