import { render, screen, waitFor } from '@testing-library/react'
import TestingAPICalls from '../components/TestingAPICalls'
import * as services from '../utils/Services'


test("Fetch Data API called", async () => {


    const mockFetchData = jest.spyOn(services, 'FetchData')
        .mockImplementation(async () => {
            return [{
                name: 'kunal'
            }];
        })

    render(<TestingAPICalls />)
    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText(/kunal/i)).toBeInTheDocument();
    })

})