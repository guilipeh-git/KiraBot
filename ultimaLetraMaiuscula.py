'''
nomes = ["maria"," julia"," ana", " milie bob"]

novaLista = [
    name[pos]  
    if pos != len(name)-1 else name[pos].upper()
    for name in nomes  
    for pos in range(len(name))  
    ]

 
print(novaLista)


'''
#=========================================================================
nomes = ["maria"," julia"," ana", " milie bob"]

nova_lista = [f"{c[:-1].lower()}{c[-1].upper()}" for c in nomes]

print(nova_lista)
#=========================================================================

'''
nome = ["joao","julia","guil","kaik"]

for l in range(0,len(nome)):
    for c in range(0,len(nome[l])):
        if(c == len(nome[l])-1):
            print(nome[l][c].upper())
        else:
            print(nome[l][c],end="")

'''
nome = ["joao","julia","guil","kaik"]
nova = []
for c in nome:
    nova.append(f"{c[:-1].lower()}{c[-1].upper()}")

print(nova)