import { AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { UsernamesService } from "./services/usernames.service";
import { inject } from "@angular/core";

export const lowercase: ValidatorFn = (ctrl) => {
    const value = ctrl.value;
    if (typeof(value) !== 'string') return null;

    if (value === value.toLowerCase()) return null;

    const uppercase = value
        .split('')
        .filter(s => s.toLowerCase() !== s)
        .join(', ')

    return {
        'lowercase': {
            wrongChars: uppercase
        }
    }
}

export const available: () => AsyncValidatorFn = () => {
    const service = inject(UsernamesService);

    return async (ctrl) => {
        const value = ctrl.value;
        if (typeof value !== 'string') return null;

        const free = await service.isAvailable(value);
        if (free) return null;

        return {
            'available': true
        }
    }
}