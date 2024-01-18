import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <td>Tarefa</td>
              <td>Duração</td>
              <td>Início</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycles) => {
              return (
                <tr key={cycles.id}>
                  <td>{cycles.task}</td>
                  <td>{cycles.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycles.startDate), {
                      addSuffix: true,
                      locale: ptBr,
                    })}
                  </td>
                  <td>
                    {cycles.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {cycles.interruptDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycles.finishedDate && !cycles.interruptDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
