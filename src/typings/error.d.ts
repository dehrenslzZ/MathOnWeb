export interface ErrorMessage {
	/**
	 * Indicates whether an error occured
	 */
	errorOccurred: boolean;
	/**
	 * The message of the response
	 */
	message?: string;
	/**
	 * The status code of the response
	 */
	code?: number;
}
