import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { StyledTable } from '../../styles/styled_table_container/styledTable'
import orderData from '../functions'

export default function LineTableComponent({result}) {

    return (
        <StyledTable>
            <Table>
                <Thead className='head'>
                    <Tr>
                        <Th className='containerTable'>Mes</Th>
                        <Th className='containerTable'>Ventas</Th>
                        <Th className='containerTable'>Ventas Totales</Th>
                    </Tr>
                </Thead>
                <Tbody className='asd'>
                    {result.months.map((e,i)=>
                    <Tr>
                        <Td className='containerTable'>{e}</Td>
                        <Td className='containerTable'>{result.sales[i]}</Td>
                        <Td className='containerTable'></Td>
                    </Tr>)
                    }
                    <Tr>
                        <Td className='containerTableTotal'>TOTAL:</Td>
                        <Td className='containerTableTotal'></Td>
                        <Td className='containerTableTotal'>{result.sales.reduce((e,e2)=>e+e2)} Productos vendidos</Td>
                    </Tr>
                </Tbody>
            </Table>
        </StyledTable>
    )
}