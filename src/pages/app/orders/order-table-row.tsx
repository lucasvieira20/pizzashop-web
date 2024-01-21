import 'react-modern-drawer/dist/index.css'

import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </SheetTrigger>

          <OrderDetails />
        </Sheet>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        3243sk24sww23o33
      </TableCell>
      <TableCell>Há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">João da Silva</TableCell>
      <TableCell>
        <span className="font-medium">R$ 1.000,00</span>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
