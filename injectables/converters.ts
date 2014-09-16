module todo.converters {
    export class Converters implements IConverters {
        formatDate(date: Date) {
            return date.toDateString();
        }
    }

    export interface IConverters {
        formatDate(date: Date): string;
    }

    plat.register.injectable('converters', Converters);
}