export default function InfoButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-cyan-500 px-2 py-1 text-md tracking-widest text-white transition duration-150 ease-in-out hover:bg-cyan-600 focus:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:bg-cyan-400 dark:bg-cyan-200 dark:text-cyan-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-cyan-900 dark:active:bg-cyan-400 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
