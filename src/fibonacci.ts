export const fibonacci = (position: number) =>{
    if (position === 0) return 0;
    if (position === 1) return 1;
    return fibonacci(position - 1) + fibonacci(position - 2);
}