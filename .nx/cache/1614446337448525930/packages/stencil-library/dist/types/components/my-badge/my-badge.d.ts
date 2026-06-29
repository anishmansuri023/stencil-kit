export declare class MyBadge {
    /**
     * Badge color variant
     */
    color: 'success' | 'warning' | 'error' | 'info' | 'neutral';
    /**
     * Badge size
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Rounded pill style
     */
    pill: boolean;
    render(): any;
}
