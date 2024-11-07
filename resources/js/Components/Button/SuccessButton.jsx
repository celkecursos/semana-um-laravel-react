export default function SuccessButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-green-500 px-2 py-1 text-md tracking-widest text-white transition duration-150 ease-in-out hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-900 dark:bg-green-200 dark:text-green-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-green-900 dark:active:bg-green-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
