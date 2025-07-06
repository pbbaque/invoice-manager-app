export interface ApiResponse<T> {
    message: string | null;
    data: T;
    statusCode: number;
    success: boolean;   
}