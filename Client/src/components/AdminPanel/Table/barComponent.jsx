import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { StyledTable } from '../../styles/styled_table_container/styledTable'
import orderData from '../functions'

export default function BarTableComponent({result}) {

    console.log(result)

    return (
        <StyledTable>
            <Table>
                <Thead className='head'>
                    <Tr>
                        <Th className='containerTable'>Mes</Th>
                        <Th className='containerTable'>Dinero</Th>
                        <Th className='containerTable'>Dinero Total</Th>
                    </Tr>
                </Thead>
                <Tbody className='asd'>
                    {result.months.map((e,i)=>
                    <Tr>
                        <Td className='containerTable'>{e}</Td>
                        <Td className='containerTable'>${result.sales[i]}</Td>
                        <Td className='containerTable'></Td>
                    </Tr>)
                    }
                    <Tr>
                        <Td className='containerTableTotal'>TOTAL:</Td>
                        <Td className='containerTableTotal'></Td>
                        <Td className='containerTableTotal'>${result.sales.reduce((e,e2)=>e+e2)}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </StyledTable>
    )
}