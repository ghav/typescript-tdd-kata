import { TpClass } from "../Tp10Class";
import {createInstance} from '../reflection';


describe('Reflextion Test', () => {
    it('Should Create Class"', () => {
        process.env.CLASS_NAME = 'TpClass';
        const instance = createInstance();
        expect(instance).toBeInstanceOf(TpClass);
        expect(instance.TP10()).toBe('This is tp10 LOG210');
    });
});