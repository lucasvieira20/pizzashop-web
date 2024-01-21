import { Separator } from '@/components/ui/separator'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Pedido - 342432090</SheetTitle>
        <SheetDescription>Detalhes do pedido</SheetDescription>
      </SheetHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Lucas Vieira</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (21) 98498-4984
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                4 horas e 15 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Separator />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperonni Familia</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 100,00</TableCell>
              <TableCell className="text-right">R$ 200,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Coca-Cola 2 l</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 12,00</TableCell>
              <TableCell className="text-right">R$ 12,00</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 212,00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </SheetContent>
  )
}
