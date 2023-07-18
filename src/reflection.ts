import { TpClass } from './Tp10Class'

export function createInstance(): any {
    const globalClasses: Record<string, any> = {TpClass,};
    const className = process.env.CLASS_NAME;
    
    if (!className) {
        throw new Error('Environment variable CLASS_NAME is not set');
    }

    const ClassConstructor = globalClasses[className];

    return new ClassConstructor();
}