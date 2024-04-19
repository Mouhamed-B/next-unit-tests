import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import Counter from '../counter'
import { describe } from 'node:test'

describe('Counter', () => {
    it('should render counter', () => {
        const initial = 0
        render(<Counter count={initial}/>)
        
        const counter = screen.getByText('Value is '+initial)

        expect(counter).toBeTruthy()
        expect(counter).toBeInstanceOf(HTMLSpanElement)
    })
    it('should increment counter value', async () => {
        const initial = 0
        render(<Counter count={initial}/>)
        
        const counter = screen.getByText('Value is '+initial)

        expect(counter).toBeTruthy()
        expect(counter).toBeInstanceOf(HTMLSpanElement)
        
        await userEvent.click(screen.getByText('+'))

        expect(counter.innerHTML).toBe("Value is "+(initial+1))
    })
    it('should decrement counter value', async () => {
        const initial = 0
        render(<Counter count={initial}/>)
        
        const counter = screen.getByText('Value is '+initial)

        expect(counter).toBeTruthy()
        expect(counter).toBeInstanceOf(HTMLSpanElement)
        
        await userEvent.click(screen.getByText('-'))

        expect(counter.innerHTML).toBe("Value is "+(initial-1))
    })
    it('should reset counter value', async () => {
        const initial = 0
        render(<Counter count={initial}/>)
        
        const counter = screen.getByText('Value is '+initial)

        expect(counter).toBeTruthy()
        expect(counter).toBeInstanceOf(HTMLSpanElement)
        
        await userEvent.dblClick(screen.getByText('-'))

        expect(counter.innerHTML).toBe("Value is "+(initial-2))

        await userEvent.dblClick(screen.getByText('reset'))

        expect(counter.innerHTML).toBe("Value is "+(initial))
    })
})