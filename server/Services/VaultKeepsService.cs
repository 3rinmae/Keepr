

namespace Keepr.Services;

public class VaultKeepsService
{
  private readonly VaultKeepsRepository _repository;
  private readonly KeepsRepository _keepsRepository;

  public VaultKeepsService(VaultKeepsRepository repository, KeepsRepository keepsRepository)
  {
    _repository = repository;
    _keepsRepository = keepsRepository;
  }

  internal VaultKeep CreateVaultKeep(VaultKeep vaultKeepData)
  {
    VaultKeep vaultKeep = _repository.CreateVaultKeep(vaultKeepData);
    // Keep keep = _keepsRepository.GetKeepById(vaultKeep.KeepId);
    // keep.Kept++;
    // _keepsRepository.UpdateKeep(keep);
    return vaultKeep;
  }

  // internal List<VaultVaultKeep> GetVaultVaultKeepsByAccountId(string userId)
  // {
  //   List<VaultVaultKeep> vaultVaultKeeps = _repository.GetVaultVaultKeepsByAccountId(userId);
  //   return vaultVaultKeeps;
  // }
}